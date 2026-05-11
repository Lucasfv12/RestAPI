class Vehiculo:
    def __init__(self, marca, velocidad_max):
        self.marca = marca
        self.velocidad_max = velocidad_max
    
    def describir(self):
        print(f'Marca: {self.marca} - Velocidad Máxima: {self.velocidad_max} km/h')

class Auto(Vehiculo):
    def __init__(self, marca, velocidad_max, puertas):
        super().__init__(marca, velocidad_max)
        self.puertas = puertas

    def describir(self):
        super().describir()
        print(f'Puertas: {self.puertas}')

class AutoElectrico(Auto):
    def __init__(self, marca, velocidad_max, puertas, bateria_kwh):
        super().__init__(marca, velocidad_max, puertas)
        self.bateria_kwh = bateria_kwh

    def describir(self):
        super().describir()
        print(f'Batería: {self.bateria_kwh} kWh')   

vehiculo1 = Vehiculo('Toyota', 180)
vehiculo1.describir()
auto1 = Auto('Honda', 200, 4)
auto1.describir()
autoElectrico1 = AutoElectrico('Tesla', 250, 4, 100)
autoElectrico1.describir()