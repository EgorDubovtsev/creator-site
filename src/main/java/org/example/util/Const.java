package org.example.util;

public interface Const {
    String MAIL_TEMPLATE = "<!DOCTYPE html>\n" +
            "\n" +
            "<html lang=\"ru\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>Новая заявка</title>\n" +
            "</head>\n" +
            "<body style=\"margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;\">\n" +
            "\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-color:#f4f6f8; padding:20px 0;\">\n" +
            "    <tr>\n" +
            "        <td align=\"center\">\n" +
            "\n" +
            "```\n" +
            "        <!-- Контейнер -->\n" +
            "        <table width=\"600\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);\">\n" +
            "\n" +
            "            <tr>\n" +
            "                <td style=\"background:#4f46e5; color:#ffffff; padding:20px; text-align:center;\">\n" +
            "                    <h2 style=\"margin:0;\">\uD83D\uDCE9 Новая заявка с сайта</h2>\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "\n" +
            "            <!-- Content -->\n" +
            "            <tr>\n" +
            "                <td style=\"padding:25px; color:#333333;\">\n" +
            "\n" +
            "                    <table width=\"100%\" cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">ID заявки:</td>\n" +
            "                            <td>${id}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Имя:</td>\n" +
            "                            <td>${name}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Телефон:</td>\n" +
            "                            <td>${phone}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Email:</td>\n" +
            "                            <td>${email}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Тип сайта:</td>\n" +
            "                            <td>${siteType}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Дополнительно:</td>\n" +
            "                            <td>${other}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Дата создания:</td>\n" +
            "                            <td>${createdAt}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                        <tr>\n" +
            "                            <td style=\"font-weight:bold;\">Отправлено:</td>\n" +
            "                            <td>${isSend}</td>\n" +
            "                        </tr>\n" +
            "\n" +
            "                    </table>\n" +
            "\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "\n" +
            "            <!-- Footer -->\n" +
            "            <tr>\n" +
            "                <td style=\"background:#f9fafb; text-align:center; padding:15px; font-size:12px; color:#888;\">\n" +
            "                    Это письмо отправлено автоматически. Не отвечайте на него.\n" +
            "                </td>\n" +
            "            </tr>\n" +
            "\n" +
            "        </table>\n" +
            "\n" +
            "    </td>\n" +
            "</tr>\n" +
            "```\n" +
            "\n" +
            "</table>\n" +
            "\n" +
            "</body>\n" +
            "</html>\n";
}
