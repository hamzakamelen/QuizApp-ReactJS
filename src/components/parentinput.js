import { Button } from "@mui/material";

function ButtonsParent(prop) {
    const { option } = prop
    const {onClick} = prop
    return (
        option.map((x,i) =>{
            return(
            <Button  onClick={onClick} className="w-50 rounded-pill shadow mt-5  fw-bold fs-5 d-inline my-2" key={i} color="primary"
             variant="outlined">
                {x}
            </Button>
            )
        }
         )
    )
}
export default ButtonsParent;