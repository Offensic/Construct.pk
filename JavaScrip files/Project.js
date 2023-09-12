const projectid = localStorage.getItem('Clickid');
document.title = projectid;




const projectSlider = document.querySelector('#page2-project-wrapper')

const Project = [

    { image: './assest/1.jpg', id: 'Project1', about: 'House 1' },
    { image: './assest/1.jpg', id: 'Project1', about: 'House 1' },
    { image: './assest/1.jpg', id: 'Project1', about: 'House 1' },
    { image: './assest/1.jpg', id: 'Project1', about: 'House 1' },
    { image: './assest/1.jpg', id: 'Project1', about: 'House 1' },

    { image: './assest/2.jpg', id: 'Project2', about: 'House 2' },
    { image: './assest/2.jpg', id: 'Project2', about: 'House 2' },
    { image: './assest/2.jpg', id: 'Project2', about: 'House 2' },
    { image: './assest/2.jpg', id: 'Project2', about: 'House 2' },
    { image: './assest/2.jpg', id: 'Project2', about: 'House 2' },

    { image: './assest/3.jpg', id: 'Project3', about: 'House 3' },
    { image: './assest/3.jpg', id: 'Project3', about: 'House 3' },
    { image: './assest/3.jpg', id: 'Project3', about: 'House 3' },
    { image: './assest/3.jpg', id: 'Project3', about: 'House 3' },
    { image: './assest/3.jpg', id: 'Project3', about: 'House 3' },



    { image: './assest/4.jpg', id: 'Project4', about: 'House 4' },
    { image: './assest/4.jpg', id: 'Project4', about: 'House 4' },
    { image: './assest/4.jpg', id: 'Project4', about: 'House 4' },
    { image: './assest/4.jpg', id: 'Project4', about: 'House 4' },
    { image: './assest/4.jpg', id: 'Project4', about: 'House 4' },


    { image: './assest/5.jpg', id: 'Project5', about: 'House 5' },
    { image: './assest/5.jpg', id: 'Project5', about: 'House 5' },
    { image: './assest/5.jpg', id: 'Project5', about: 'House 5' },
    { image: './assest/5.jpg', id: 'Project5', about: 'House 5' },
    { image: './assest/5.jpg', id: 'Project5', about: 'House 5' },

    { image: './assest/7.jpg', id: 'Project7', about: 'House 7' },
    { image: './assest/7.jpg', id: 'Project7', about: 'House 7' },
    { image: './assest/7.jpg', id: 'Project7', about: 'House 7' },
    { image: './assest/7.jpg', id: 'Project7', about: 'House 7' },
    { image: './assest/7.jpg', id: 'Project7', about: 'House 7' },

    { image: './assest/11.jpg', id: 'Project11', about: 'House 11' },
    { image: './assest/11.jpg', id: 'Project11', about: 'House 11' },
    { image: './assest/11.jpg', id: 'Project11', about: 'House 11' },
    { image: './assest/11.jpg', id: 'Project11', about: 'House 11' },
    { image: './assest/11.jpg', id: 'Project11', about: 'House 11' },


    { image: './assest/12.jpg', id: 'Project12', about: 'House 12' },
    { image: './assest/12.jpg', id: 'Project12', about: 'House 12' },
    { image: './assest/12.jpg', id: 'Project12', about: 'House 12' },
    { image: './assest/12.jpg', id: 'Project12', about: 'House 12' },
    { image: './assest/12.jpg', id: 'Project12', about: 'House 12' },

    { image: './assest/13.jpg', id: 'Project12', about: 'House 13' },
    { image: './assest/13.jpg', id: 'Project12', about: 'House 13' },
    { image: './assest/13.jpg', id: 'Project12', about: 'House 13' },
    { image: './assest/13.jpg', id: 'Project12', about: 'House 13' },
    { image: './assest/13.jpg', id: 'Project12', about: 'House 13' },

    { image: './assest/18.jpg', id: 'Project18', about: 'House 18' },
    { image: './assest/18.jpg', id: 'Project18', about: 'House 18' },
    { image: './assest/18.jpg', id: 'Project18', about: 'House 18' },
    { image: './assest/18.jpg', id: 'Project18', about: 'House 18' },
    { image: './assest/18.jpg', id: 'Project18', about: 'House 18' },







]

var wrapper = '';
if (projectid === "Allproject") {

    Project.forEach(details => {

        wrapper += `<div class="img" >
        <img src="${details.image}" alt="" class="projectimage">
        <p>${details.about}</p>
    </div>`

    })

    projectSlider.innerHTML = wrapper




}

else {

    const FilertProject = Project.filter(Project => Project.id === projectid);


    FilertProject.forEach(details => {

        wrapper += `<div class="img" >
        <img src="${details.image}" alt="" class="projectimage">
        <p>${details.about}</p>
    </div>`

    })

    projectSlider.innerHTML = wrapper


}










