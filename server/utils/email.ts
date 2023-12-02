import * as fs from 'fs';
import * as path from 'path';
import * as nodemailer from 'nodemailer';
import * as handlebar from 'handlebars';

interface ISendEmail {
     otp?: number;
     name?: string;
     ip?: string;
}

export class SendEmail {
     constructor(public email: string) {
          this.email = email;
     }

     transporter() {
          const transporter = nodemailer.createTransport({
               host: process.env.COMPANY_EMAIL_HOST,
               port: Number(process.env.COMPANY_EMAIL_PORT),
               service: process.env.COMPANY_EMAIL_SERVICE,

               auth: {
                    user: process.env.COMPANY_EMAIL,
                    pass: process.env.COMPANY_PASSWORD,
               },
          });

          return transporter;
     }

     async send(temp: string, subject: string, options: ISendEmail) {
          const templatePath = path.join(
               __dirname,
               '/../templates',
               `${temp}.handlebars.hbs`
          );

          const templateFile = fs.readFileSync(templatePath, 'utf-8');

          // Compile the Handlebars template
          const template = handlebar.compile(templateFile);

          // Replace template placeholders with actual data
          const htmlContent = template(options);

          const mailOptions: nodemailer.SendMailOptions = {
               from: `Staygotransit ${process.env.COMPANY_EMAIL}`,
               to: this.email,
               subject: subject,
               html: htmlContent,
          };

          // create transporter and send email
          await this.transporter().sendMail(mailOptions);
     }

     async otpVerification(otp: number) {
          await this.send(
               'otpVerification',
               'Welcome to StayGoTransit - Verify Your bEmail',
               { otp }
          );
     }

     async loginEmail(otp: number) {
          await this.send(
               'loginOTP',
               `${otp} is your staygotransit verification code`,
               {
                    otp,
               }
          );
     }

     async loginNotification() {
          const username: string = this.email.split('@')[0];

          await this.send('login', 'Login Notification', {
               name: username,
          });
     }
}
