import { gql } from "@apollo/client";


export const GET_USERS= gql `
query GetUsers($page:Int, $limit:Int) {
    users(page: $page, limit : $limit) {
        data { 
            id 
            title 
            firstName 
            lastName 
            picture 

        }
        total 
        page 
        limit 
    }
}
`;