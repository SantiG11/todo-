db.collection('todos').orderBy('title').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    console.log(changes)
})