from PySide6.QtWidgets import QApplication, QWidget, QLabel, QPushButton



app = QApplication()


window = QPushButton('test')
window.show()

print(issubclass(QPushButton, QWidget))


app.exec()
