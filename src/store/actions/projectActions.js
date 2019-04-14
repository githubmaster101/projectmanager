export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database 
        const firstore = getFirestore();
        firstore.collection('projects').add({
            ...project,
            authorFirstName: 'Jann',
            authorLastName: 'Meikle',
            authorId: 123456,
            timestamp: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}