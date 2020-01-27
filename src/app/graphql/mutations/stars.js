import gql from "graphql-tag";

export const STAR_REPOSITORY = gql`
mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
        starrable {
            id
            viewerHasStarred
        }
    }
}`;

export const REMOVE_STAR = gql`
mutation RemoveStar($id:ID!){
    removeStar(input:{starrableId:$id}){
        starrable{
            id
            viewerHasStarred
        }
    }
}`;