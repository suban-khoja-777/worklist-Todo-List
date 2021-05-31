const newId = () => {
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id_length = 7;
    let new_id = '';
    for(let i=0;i<id_length;i++){
        new_id += str[Math.floor(Math.random() * 62)];
    }
    return new_id;
}

export default newId;