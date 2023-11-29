# STAYGOTRANSIT API

This api solely focused on restful API pattern, which makes it easier for developers to use and interact with it efficiently.

## Stacks

-    NODEJS/ EXPRESSJS / TYPESCRIPT

## Features

-    Sending email using nodemailer engine and handlebars for template

```js
export class SendEmail {
     constructor(public email: string, public name?: string) {
          this.name = name;
          this.email = email;
     }

     transporter() {
          const transporter = nodemailer.createTransport({
               service: 'gmail',

               auth: {
                    user: process.env.COMPANY_EMAIL,
                    pass: process.env.COMPANY_PASSWORD,
               },
          });

          return transporter;
     }

     async sendEmail(subject: string, otp: number, temp: string) {
          const templateFile = fs.readFileSync(
               `${dirname}/templates/${temp}`,
               'utf-8'
          );

          // Compile the Handlebars template
          const template = handlebar.compile(templateFile);

          // Replace template placeholders with actual data
          const emailContent = template({
               otp,
          });

          await this.transporter().sendMail({
               from: process.env.COMPANY_EMAIL,
               to: this.email,
               subject: subject,
               html: emailContent,
          });
     }
}
```
