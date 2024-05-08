import logo from './img/logo.png';

const header=() => {
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('id','header')
    const titleLogo = document.createElement('img');
    titleLogo.className = 'title logo';
    titleLogo.setAttribute("src",logo);
    const titleName= document.createElement('div');
    titleName.className='title name';
    const guestAvatar=document.createElement('div');
    guestAvatar.className='guest avatar';

    headerDiv.appendChild(titleLogo);
    headerDiv.appendChild(titleName);
    headerDiv.appendChild(guestAvatar);
    document.body.appendChild(headerDiv);
};

export { header };
