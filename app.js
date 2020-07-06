// const http = new easyHTTP;

// //Get Posts

// // http.get('https://jsonplaceholder.typicode.com/posts1', function(err, post){

// // if(err){
// //     console.log(err);

// // }else{
// //     console.log(post);


// // }

// // });


// //Get single post

// // http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){

// // if(err){
// //     console.log(err);

// // }else{
// //     console.log(post);


// // }

// // });

// // Create Data

// const data = {
//     title: 'Custom Post',
//     body: 'This is custome post'
// };


// //Create Post

// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){

// //     if(err){
// //             console.log(err);
        
// //         }else{
// //             console.log(post);

// //         }
// // });


// //Update POST

// // http.put('https://jsonplaceholder.typicode.com/posts/5',data,function(err, post){

// //     if(err){
// //                     console.log(err);
                
// //                 }else{
// //                     console.log(post);
        
// //                 }


// // });

// //Delete Post

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){

// if(err){
//     console.log(err);

// }else{
//     console.log(response);


// }

// });


document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);

document.getElementById('button3').addEventListener('click',getExternal);


//Get local text file data

function getText(){
    fetch('text.txt')
    .then(res => res.text())
    .then(data =>{

        console.log(data);
        document.getElementById('output').innerHTML = data;

    })
    .catch(err => console.log(err));

}

//Get local Json data
function getJson(){
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {

        console.log(data);
        let output = '';
        data.forEach(function(post){

            output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML = output;
    

    })
    .catch(err => console.log(err));

}

//Get from external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data =>{

        console.log(data);
        let output = '';
        data.forEach(function(user){

            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    

    })
    .catch(err => console.log(err));

}