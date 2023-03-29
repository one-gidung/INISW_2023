from PySide6.QtWidgets import QApplication, QPushButton

import sys


app = QApplication(sys.argv)

window = QPushButton('Push me')
window.setFixedSize(400, 300)
window.show()



app.exec()
