
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCnC9tsIZXm-S9X0vTZ4bciRFCE3CmpXSs",
            authDomain: "courses-d3d3c.firebaseapp.com",
            projectId: "courses-d3d3c",
            storageBucket: "courses-d3d3c.appspot.com",
            messagingSenderId: "525932621607",
            appId: "1:525932621607:web:3fd6f0c200222ed4650302"
            };
        
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            const db= firebase.firestore()

const list = document.getElementById('list');
addCourse = course =>{
    const html = `
    <li class="list-group-item">
    <h3>${course.title}</h3>
    <small>${course.created_at.toDate()}</small>

    </li>


    `
    list.innerHTML+= html;
}
// fetchData()
// function fetchData(){
//     let coursesList = document.getElementById("coursesList")
    
db.collection("courses").get()
.then(res=> {
    let data = res 
    data.docs.forEach(course => {
        addCourse(course.data())
        // console.log(course.data());
    })
})
.catch(err=> console.error(err))





    function addCours(){
        const courseName = document.getElementById("course").value
        db.collection("courses").doc("idiurgfuiayzgfuib").set({
            title: courseName,
            created_at : new Date()
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    db.collection("courses")
    
    .onSnapshot(() => {
        console.log("data changed");
        
    });
