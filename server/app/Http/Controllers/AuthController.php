<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

use Laravel\Passport\Http\Controllers\AccessTokenController;
use Laravel\Passport\TokenRepository;
use Lcobucci\JWT\Parser as JwtParser;
use League\OAuth2\Server\AuthorizationServer;
use Psr\Http\Message\ServerRequestInterface;

class AuthController extends Controller
{   
    #Todo: Use GuzzleHttp when deploy (Anh Vu)
    protected $server;
    protected $tokens;
    protected $jwt;


    public function __construct(AuthorizationServer $server,
                                TokenRepository $tokens,
                                JwtParser $jwt)
    {
        $this->jwt = $jwt;
        $this->server = $server;
        $this->tokens = $tokens;
    }

    public function login(ServerRequestInterface $request){   
        # require username and password in $request
        $controller = new AccessTokenController($this->server, $this->tokens, $this->jwt);

        $request = $request->withParsedBody($request->getParsedBody() +
        [
            'grant_type' => 'password',
            'client_id' => config('services.passport.client_id'),
            'client_secret' => config('services.passport.client_secret'),
        ]);

        return with(new AccessTokenController($this->server, $this->tokens, $this->jwt))
            ->issueToken($request);
    }

    public function register(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'language' => ['required', 'string', 'max:4'],
        ]);
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->language = $request->language;
        $user->password = Hash::make($request->password);
        $user->self_intro = $request->self_intro;
        $user->currency = $request->currency;
        if($user->save()) return 'OK';
        else return 'Error';
        // Todo: return code 4xx instead of 2xx
    }

    public function editInfo(Request $request){
        // $request->validate([
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => ['required', 'string', 'min:8'],
        //     'language' => ['required', 'string', 'max:4'],
        // ]);
        $user = User::find($request->userId);
        $user->name = $request->name;
        $user->language = $request->language;
        $user->password = Hash::make($request->password);
        $user->self_intro = $request->self_intro;
        $user->currency = $request->currency;
        if($user->save()) return 'OK';
        else return 'Error';
    }

    public function logoutAll(Request $request){   
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        return response()->json('Logged out successfully', 200);
    }

    public function logoutCurrent(Request $request){
        //return $request->bearerToken();
        Auth::user()->token()->revoke();
        return response()->json('Logged out successfully from this device', 200);
    }
}
