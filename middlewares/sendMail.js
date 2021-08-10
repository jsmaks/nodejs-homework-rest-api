
const nodemailer = require('nodemailer');

module.exports = async function sendMail({ to, subject, html }) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user,
      pass: testAccount.pass, 
    },
  });

  const info = await transporter.sendMail({
    from: '"Nodemailer" <node@mailer.com>',
    to,
    subject,
    html,
  });

  console.log('\x1b[34m[nodemailer] Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log(
    '\x1b[34m[nodemailer] Preview URL: %s',
    nodemailer.getTestMessageUrl(info),
  );
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
// const nodemailer = require('nodemailer');
// require('dotenv').config();
// const { EMAIL_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: 'smtp.meta.ua',
//   port: '465',
//   secure: 'true',
//   auth: {
//     user: 'info_js_maks@meta.ua',
//     pass: EMAIL_PASSWORD,
//   },
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);



// const sendMail = async ({to, subject, text, html})=>{
//   const mail = {
//     from: 'info_js_maks@meta.ua',
//     to: '',
//     subject: '',
//     text: '',
//   };
//   try {
//     const result = await transporter.sendMail(mail)
//     return result;
//   } catch (error) {
//     throw error;
//   }

// }
// module.exports = sendMail;

// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const {SENDGRID_KEY}= process.env;
// sgMail.setApiKey(SENDGRID_KEY);

// const sendMail = async ({to, subject, text, html})=>{

//   const mail = {
//     to:"",
//     from:"jeks.deker26@gmail.com",
//     subject:"",
//     text:"",
//     html:"",

//   }
//   try {
//     const answer = await sgMail.send(mail);
//     return answer;
//   } catch (error) {
//    throw error;
//   }
// }

// module.exports = sendMail;
