const $getPostBtn = document.querySelector('.getPostBtn')
const $container = document.querySelector('.container')
const $getComent = document.querySelector('.getComentBtn')
const $getAlbom = document.querySelector('.getAlbomBtn')
const $getPhoto = document.querySelector('.getPhotoBtn')
const $getTodo = document.querySelector('.getTodoBtn')
const $getUser = document.querySelector('.getUserBtn')

const getPost = cb =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.addEventListener('load', () =>{
        const responce = JSON.parse(xhr.response)
        cb(responce)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
        console.log('ERROR');
    })

    xhr.send()
}

$getPostBtn.addEventListener('click', e=>{
    e.preventDefault();
    getPost(res =>{
        $container.innerHTML = res.map(item => cardPost(item)).join('')
    });
})


function cardPost(post){
    return`
        <div class='item'>
            <div class='card'>
                <div class="card-header">
                    ${post.title}
                </div>
                <div class="card-body">
                    ${post.body}
                </div>
            </div>        
        </div>
    `
}

const getComent = cb =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');

    xhr.addEventListener('load', () =>{
        const responce = JSON.parse(xhr.response)
        cb(responce)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
        console.log('ERROR');
    })

    xhr.send()
}
$getComent.addEventListener('click', e =>{
    e.preventDefault();
    getComent(res =>{
        $container.innerHTML = res.map(item => cardComent(item)).join('')
    });

})

function cardComent(coment){
    return`
        <div class="coment_item">
            <div class="coment-email">
            <a>${coment.email}</a>
            </div>
            <div class="card_comment">
                <div class="coment-header">
                ${coment.name}
                </div>
                <div class="coment-body">
                ${coment.body}
                </div>
            </div>
        </div>
    `
}

const getAlbom = cb =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums');

    xhr.addEventListener('load', () =>{
        const responce = JSON.parse(xhr.response)
        cb(responce)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
        console.log('ERROR');
    })

    xhr.send()
}
$getAlbom.addEventListener('click', e =>{
    e.preventDefault();
    getAlbom(res =>{
        $container.innerHTML = res.map(item => cardAlbom(item)).join('')
    });

})

function cardAlbom(albom){
    return`
        <div class="albom_item">
            <div><p>${albom.title}</p></div>
        </div>
    `
}
const getPhoto = cb =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');

    xhr.addEventListener('load', () =>{
        const responce = JSON.parse(xhr.response)
        cb(responce)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
        console.log('ERROR');
    })

    xhr.send()
}
$getPhoto.addEventListener('click', e =>{
    e.preventDefault();
    getPhoto(res =>{
        $container.innerHTML = res.map(item => cardPhoto(item)).join('')
    });

})

function cardPhoto(photo){
    return`
        <div class="photo_item">
            <div class="photo-title">
                <p>${photo.title}</p>
                <div class="photo">
                    <img src="${photo.thumbnailUrl}">
                </div>
            </div>
            <div class="photo_title">
                <img src="${photo.url}">
            </div>
        </div>
    `
}

const getUser = cb =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', () =>{
        const responce = JSON.parse(xhr.response)
        cb(responce)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
        console.log('ERROR');
    })

    xhr.send()
}
$getUser.addEventListener('click', e =>{
    e.preventDefault();
    getUser(res =>{
        $container.innerHTML = res.map(item => cardUser(item)).join('')
    });

})

function cardUser(user){
    return`
        <div class="user_item">
            <div class="user_name"><b>${user.name}</b></div>
            <div class="user_info">
                <p>Ник пользователья: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Телефон: ${user.phone}</p>
                <p>Сайт: ${user.website}</p>
                <div class="user_adres" onclick="User(${user.id})">
                </div>
            </div>
        </div>
   `
}
// function User(id){
//     getUser(res =>{
//         const plusAdres = res.map(item =>{
//             if(item.id === id){
//                 get`
//                 <p>Город: ${item.}</p>
//                 <p>Улица: ${item.street}</p>
//                 `
//             }
//         })
//     })
// }
