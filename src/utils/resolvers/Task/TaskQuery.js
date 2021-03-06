import gql from 'graphql-tag'

export const GETTASK = gql`
    query getTask($taskID: ID!){
        getTask(taskID: $taskID){
            id
            teacherID
            subjectID
            title
            body
            createdAt
            deliveryDate
            archives {
                id
                name
                status
            }
            studentArchives {
                id
                studentID
                name
                status
                from
                sTaskID
            }
        }
    }
`

export const GETTASKS = gql`
    query getTasks{
        getTasks{
            id
            teacherID
            subjectID
            title
            body
            createdAt
            deliveryDate
            archives {
                id
                name
                status
            }
            studentArchives {
                id
                studentID
                name
                status
                from
                sTaskID
            }
        }
    }
`

export const GETSUBJECTTASKS = gql`
    query getSubjectTasks($subjectID: ID!){
        getSubjectTasks(subjectID: $subjectID){
            id
            teacherID
            subjectID
            title
            body
            createdAt
            deliveryDate
            archives {
                id
                name
                status
            }
            studentArchives {
                id
                studentID
                name
                status
                from
                sTaskID
            }
        }
    }
`