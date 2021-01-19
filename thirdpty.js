function runIframe() {
  const clientInfo  = {
    // link:'dashboard-petra.netlify.app',
    link: 'http://localhost:8080',
    amount: 100000,
    email: 'danyadegoke@gmail.com',
    key:'sk_live_5MWv6uPNC2iq8GkQTxVPovsSz1Z9SPxK',
    onClose: function(){
      alert('It Closed oo')
    },
    onSuccess: function(){
      alert('It Succeeded oo')
    }
  }
  openIframe(clientInfo)

}
