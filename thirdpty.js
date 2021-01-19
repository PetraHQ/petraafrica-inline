function runIframe() {
  const clientInfo  = {
    // link:'dashboard-petra.netlify.app',
    link: 'http://localhost:8080',
    src: 'https://raw.githubusercontent.com/Cheetah-Speed-Technology/website_dstore/master/Cap-front1.png',
    amount: 100000,
    amount_in_btc: '0.0023',
    wallet_address:'HKEJ993NN3RND393',
    url: 'jumia.com.ng',
    name:'Cap',
    email: 'danyadegoke@gmail.com',
    qty:'1',
    description:'Great Pass Cap',
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
