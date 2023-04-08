export interface IResponseModel<responseModel> {
    data: responseModel;
    success: boolean;
    message: string;
}