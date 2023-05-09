import { useToast } from "@chakra-ui/react";

export const useFavourite = () => {
    const Toast = useToast()

    const favourite = (item) => {
        // const itemString = JSON.stringify(item)
        // localStorage.setItem("favourite", itemString)
        console.log(item)
        Toast({
            title: 'Item added to favourites',
            position: 'top-left',
            duration: 1000,
            status: 'success',
            variant: 'subtle',
            colorScheme: 'pink'

        })
    }
    return { favourite }
}