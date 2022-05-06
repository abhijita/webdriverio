var allureReporter = require('@wdio/allure-reporter').default
var dragAndDrop = require('html-dnd').codeForSelectors;
// var webdriverio = require('webdriverio');
// //var options = { desiredCapabilities: { browserName: 'chrome' } };
// var client = webdriverio.remote();

describe('nFlows ', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addFeature('nFlowsDraganddrop')
       await browser.url(`https://nt-uat.nflows.com/nFlows/login/login.jsp`)
       await browser.pause(5000)
     //   const username =- $('#uname')
     //  await browser.$('#uname').waitforExist({setTimeout:5000})
       await browser.$('#uname').setValue('AA662')
       await browser.$('#password').setValue('Nt@123')
       await browser.$('.btn.btn-login.loginSubmit').click()
       
       await browser.$('#nav-icon1').waitForExist({setTimeout:5000})
       await browser.pause(5000)
       await browser.$('#nav-icon1').click()
       await browser.$('body > menu-headers:nth-child(1) > div:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
       await browser.pause(5000)
        await browser.$('li[class="ng-scope active"] li:nth-child(1) a:nth-child(1)').click()
        await browser.pause(5000)
        await browser.$('button[title="New Entity Definition"]').click()
        await browser.pause(2000)
 //       const source = $('#fields > div.accordion-scroll.mouse-scroll > ul > li:nth-child(1) > div')
   //     console.log('===================================================='+source.getLocation('x'))
      //  var target = $('#accordSDF_DGP_EntityFieldInformation > div > div:nth-child(1) > div')
      //  await source.dragAndDrop({x:target.getLocation('x'),y: target.getLocation('y')})

        await browser.pause(10000)
//var target = $('#accordSDF_DGP_EntityFieldInformation > div > div:nth-child(1) > div')
        await browser.execute(dragAndDrop, '#fields > div.accordion-scroll.mouse-scroll > ul > li:nth-child(1) > div',
         '#accordSDF_DGP_EntityFieldInformation > div > div:nth-child(1) > div')
        //  client
        //     .init()
        //     .url('http://example.com')
        //     .execute(dragAndDrop, '#fields > div.accordion-scroll.mouse-scroll > ul > li:nth-child(1) > div','#accordSDF_DGP_EntityFieldInformation > div > div:nth-child(1) > div')
        //     .end();

        await browser.saveScreenshot('./ScreenShot/dragAndDrop.png')
    });
})