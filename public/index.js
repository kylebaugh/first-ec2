const btn = document.querySelector('button')

const getCat = () => {
   axios.get('http://ec2-34-210-123-136.us-west-2.compute.amazonaws.com/api/cat')
      .then(res => alert(res.data))
}

btn.addEventListener('click', getCat)