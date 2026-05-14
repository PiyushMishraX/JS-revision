const arr = [
    'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1778088442532-2a3ed3767931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1777502371931-d1c137fa9f44?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1777903675832-6da170eee699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'

]

const imageEl = document.querySelector('img')
let num = 0;

setInterval(() => {
    imageEl.setAttribute('src', arr[num])
    num = (num+1) % arr.length;
    
}, 2000);