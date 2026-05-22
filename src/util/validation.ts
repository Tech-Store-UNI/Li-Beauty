
export const isErrorResponse = (error: unknown): error is ErrorResponse => {
    return (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "erros" in error &&
        Array.isArray((error as ErrorResponse).erros)
    );
};
export interface ErrorResponse {
    status: number;
    erros: { message: string }[];
}