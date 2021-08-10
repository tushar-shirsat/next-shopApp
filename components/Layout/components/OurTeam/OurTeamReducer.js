const initialState = [
    {
        name: 'Williamson',
        desiginaion: 'Web Developer',
        image: "/images/img-1.jpg",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna
        diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo
        sed condimentum rutrum. Nunc tristique purus turpis. Maecenas
        vulputate.`
    },
    {
        name: 'Kristiana',
        desiginaion: 'Web Developer',
        image: "/images/img-2.jpg",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna
        diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo
        sed condimentum rutrum. Nunc tristique purus turpis. Maecenas
        vulputate.`
    },
    {
        name: 'Steve Thomas',
        desiginaion: 'Web Developer',
        image: "/images/img-3.jpg",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna
        diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo
        sed condimentum rutrum. Nunc tristique purus turpis. Maecenas
        vulputate.`
    },
    {
        name: 'Williamson',
        desiginaion: 'Web Developer',
        image: "/images/img-1.jpg",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna
        diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo
        sed condimentum rutrum. Nunc tristique purus turpis. Maecenas
        vulputate.`
    },

]

export const ourTeamReducer = (state=initialState,action) =>{
    switch(action.type){
        default: 
            return state;
    }
};