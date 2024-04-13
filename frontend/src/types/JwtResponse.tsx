export type JwtResponse = {
    type: string,
    token: string
} 

export type JwtErrorResponseMessage = {
    message: string;
};

export type JwtErrorResponse = {
    errors: JwtErrorResponseMessage[];
}