
var app = new Vue ({
    el: '#app',
    data () {
        return {
            info: null,
            loading: true,
            errored: false
        }
},
mounted() {

    fetch("http://nodecarbon.op-bit.nz/api/devices")
        
        .then(res => res.json())
        .then(info => {
            this.info = info;
            // console.log(this.info);
        })

        .catch(error => {
            console.log(error)
        })
}


})
