import smtplib
# creates SMTP session
s = smtplib.SMTP('smtp.gmail.com', 587)
# start TLS for security
s.starttls()
# Authentication
s.login("aakashrkl1609@gmail.com", "aqwsdzbvtxhcwjfr")
# message to be sent
message = "Message_you_need_to_send"
# sending the mail
s.sendmail("aakashrkl1609@gmail.com", "aakashrkl603@gmail.com", message)
# terminating the session
s.quit()