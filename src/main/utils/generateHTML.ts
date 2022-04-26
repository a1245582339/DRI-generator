import ejs from "ejs";
import Store from "electron-store";
import { readFileSync } from "fs";
import { join } from "path";

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Legacy Partner Hub</h1>
    <table>
        <tr>
            <th></th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>

        <% ticketData.legacyPartnerHub.forEach(function(ticket){ %>
            <tr>
                <th><%= ticket.area %></th>
                <td>张莉</td>
                <td>22</td>
            </tr>
        <% }); %>
    </table>
</body>
</html>`

const store = new Store();
export const generateHTML = () => {
  const html = ejs.render(template, {
    ticketData: store.get("ticket"),
  });
  console.log(html);
};
