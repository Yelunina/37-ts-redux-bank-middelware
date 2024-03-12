import { AppDispatch } from "../configureStore/store"

export const PUT_QUOTE = 'PUT_QUOTE'

export const putQuote = (quote: string) => ({
    type: PUT_QUOTE,
    payload: quote
})

export const fetchQuote = () => {
    return (dispatch: AppDispatch) => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => data.sentence)
            .then(quote => dispatch(putQuote(quote as string)))
            .catch(() => dispatch(putQuote('Error')))
    }
}