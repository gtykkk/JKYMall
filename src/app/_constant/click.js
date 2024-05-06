'use client'

const click = (e) => {
    e.preventDefault();
    router.push(e.target.value);
}

export default click;