import { responseError } from "./response.helper.js"

// middleware bat loi, khong duoc phep xay ra loi ma khong duoc xu ly, khong duoc ton tai loi tu logic 
export const appError =  (err, req, res, next) => {
    // console.log("Lỗi ở middleware đặc biệt xử lý lỗi", err)
    console.log(err)

    const response = responseError(err?.message, err?.statusCode, err?.stack)

    res.status(response.statusCode).json(response)
}
