import { WebPlugin } from '@capacitor/core';
import type { AuthCredential as FirebaseAuthCredential, AuthProvider as FirebaseAuthProvider, UserCredential as FirebaseUserCredential } from 'firebase/auth';
import type { ApplyActionCodeOptions, ConfirmPasswordResetOptions, ConfirmVerificationCodeOptions, CreateUserWithEmailAndPasswordOptions, FetchSignInMethodsForEmailOptions, FetchSignInMethodsForEmailResult, FirebaseAuthenticationPlugin, GetCurrentUserResult, GetIdTokenOptions, GetIdTokenResult, GetTenantIdResult, IsSignInWithEmailLinkOptions, IsSignInWithEmailLinkResult, LinkResult, LinkWithEmailAndPasswordOptions, LinkWithEmailLinkOptions, LinkWithOAuthOptions, LinkWithPhoneNumberOptions, RevokeAccessTokenOptions, SendEmailVerificationOptions, SendPasswordResetEmailOptions, SendSignInLinkToEmailOptions, SetLanguageCodeOptions, SetPersistenceOptions, SetTenantIdOptions, SignInResult, SignInWithCustomTokenOptions, SignInWithEmailAndPasswordOptions, SignInWithEmailLinkOptions, SignInWithOAuthOptions, SignInWithOpenIdConnectOptions, SignInWithPhoneNumberOptions, UnlinkOptions, UnlinkResult, UpdateEmailOptions, UpdatePasswordOptions, UpdateProfileOptions, UseEmulatorOptions } from './definitions';
export declare class FirebaseAuthenticationWeb extends WebPlugin implements FirebaseAuthenticationPlugin {
    static readonly AUTH_STATE_CHANGE_EVENT = "authStateChange";
    static readonly PHONE_CODE_SENT_EVENT = "phoneCodeSent";
    static readonly PHONE_VERIFICATION_FAILED_EVENT = "phoneVerificationFailed";
    static readonly ERROR_NO_USER_SIGNED_IN = "No user is signed in.";
    static readonly ERROR_PHONE_NUMBER_MISSING = "phoneNumber must be provided.";
    static readonly ERROR_RECAPTCHA_VERIFIER_MISSING = "recaptchaVerifier must be provided and must be an instance of RecaptchaVerifier.";
    static readonly ERROR_CONFIRMATION_RESULT_MISSING = "No confirmation result with this verification id was found.";
    private lastConfirmationResult;
    constructor();
    applyActionCode(options: ApplyActionCodeOptions): Promise<void>;
    createUserWithEmailAndPassword(options: CreateUserWithEmailAndPasswordOptions): Promise<SignInResult>;
    confirmPasswordReset(options: ConfirmPasswordResetOptions): Promise<void>;
    confirmVerificationCode(options: ConfirmVerificationCodeOptions): Promise<SignInResult>;
    deleteUser(): Promise<void>;
    fetchSignInMethodsForEmail(options: FetchSignInMethodsForEmailOptions): Promise<FetchSignInMethodsForEmailResult>;
    getPendingAuthResult(): Promise<SignInResult>;
    getCurrentUser(): Promise<GetCurrentUserResult>;
    getIdToken(options?: GetIdTokenOptions): Promise<GetIdTokenResult>;
    getRedirectResult(): Promise<SignInResult>;
    getTenantId(): Promise<GetTenantIdResult>;
    isSignInWithEmailLink(options: IsSignInWithEmailLinkOptions): Promise<IsSignInWithEmailLinkResult>;
    linkWithApple(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithEmailAndPassword(options: LinkWithEmailAndPasswordOptions): Promise<LinkResult>;
    linkWithEmailLink(options: LinkWithEmailLinkOptions): Promise<LinkResult>;
    linkWithFacebook(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithGameCenter(): Promise<LinkResult>;
    linkWithGithub(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithGoogle(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithMicrosoft(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithOpenIdConnect(options: SignInWithOpenIdConnectOptions): Promise<SignInResult>;
    linkWithPhoneNumber(options: LinkWithPhoneNumberOptions): Promise<void>;
    linkWithPlayGames(): Promise<LinkResult>;
    linkWithTwitter(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    linkWithYahoo(options?: LinkWithOAuthOptions): Promise<LinkResult>;
    reload(): Promise<void>;
    revokeAccessToken(options: RevokeAccessTokenOptions): Promise<void>;
    sendEmailVerification(options: SendEmailVerificationOptions): Promise<void>;
    sendPasswordResetEmail(options: SendPasswordResetEmailOptions): Promise<void>;
    sendSignInLinkToEmail(options: SendSignInLinkToEmailOptions): Promise<void>;
    setLanguageCode(options: SetLanguageCodeOptions): Promise<void>;
    setPersistence(options: SetPersistenceOptions): Promise<void>;
    setTenantId(options: SetTenantIdOptions): Promise<void>;
    signInAnonymously(): Promise<SignInResult>;
    signInWithApple(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithCustomToken(options: SignInWithCustomTokenOptions): Promise<SignInResult>;
    signInWithEmailAndPassword(options: SignInWithEmailAndPasswordOptions): Promise<SignInResult>;
    signInWithEmailLink(options: SignInWithEmailLinkOptions): Promise<SignInResult>;
    signInWithFacebook(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithGithub(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithGoogle(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithMicrosoft(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithOpenIdConnect(options: SignInWithOpenIdConnectOptions): Promise<SignInResult>;
    signInWithPhoneNumber(options: SignInWithPhoneNumberOptions): Promise<void>;
    signInWithPlayGames(): Promise<SignInResult>;
    signInWithGameCenter(): Promise<SignInResult>;
    signInWithTwitter(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signInWithYahoo(options?: SignInWithOAuthOptions): Promise<SignInResult>;
    signOut(): Promise<void>;
    unlink(options: UnlinkOptions): Promise<UnlinkResult>;
    updateEmail(options: UpdateEmailOptions): Promise<void>;
    updatePassword(options: UpdatePasswordOptions): Promise<void>;
    updateProfile(options: UpdateProfileOptions): Promise<void>;
    useAppLanguage(): Promise<void>;
    useEmulator(options: UseEmulatorOptions): Promise<void>;
    private handleAuthStateChange;
    private applySignInOptions;
    signInWithPopupOrRedirect(provider: FirebaseAuthProvider, mode?: 'popup' | 'redirect'): Promise<FirebaseUserCredential | never>;
    linkCurrentUserWithPopupOrRedirect(provider: FirebaseAuthProvider, mode?: 'popup' | 'redirect'): Promise<FirebaseUserCredential | never>;
    linkCurrentUserWithCredential(credential: FirebaseAuthCredential): Promise<FirebaseUserCredential>;
    private createSignInResult;
    private createCredentialResult;
    private createUserResult;
    private createUserMetadataResult;
    private createUserProviderDataResult;
    private createAdditionalUserInfoResult;
    private getErrorMessage;
    private throwNotAvailableError;
}
