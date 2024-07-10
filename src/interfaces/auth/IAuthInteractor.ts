export interface IAuthInteractor {
    signUp(input: any): Promise<{
        status: number;
        data: any;
    }>;

    signIn(input: any): Promise<{
        status: number;
        data: any;
    }>;
}
