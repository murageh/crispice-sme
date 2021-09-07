import {Slide, toast} from "react-toastify";


export const errorToaster = (message?: JSX.Element, type = "error", position = 'top-right', autoClose = 5000, transition = Slide) => {

    return toast.error(message ?? "Message", {
        transition: transition,
        position: "top-right",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: type === "error" ? "error" : "warning"
    });
}

export const successToaster = (message = "Message", position = 'top-right', autoClose = 5000, transition = Slide) => {

    return toast.success(message ?? "Message", {
        transition: transition,
        position: "top-right",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}