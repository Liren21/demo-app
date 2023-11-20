import axios from 'axios'
import { UsersType} from "../models/types/UsersType";


export default {

    async getAuth(): Promise<UsersType[]> {

        let result: UsersType[]
        const client_id: string = 'd4e421s4el59uibv2hg9'

        const url = `https://functions.yandexcloud.net/${client_id}`

        await axios
            .post(url)
            .then((res) => {
                result = res.data
            })
            .catch(() => {
                }
            )
            .then(() => {

            })

        // @ts-ignore
        return result
    },
}
