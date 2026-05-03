# 1. Usamos una imagen de Maven para compilar el código (Etapa de construcción)
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app

# Copiamos el archivo de configuración y descargamos dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiamos el código fuente y generamos el archivo ejecutable (.jar)
COPY src ./src
RUN mvn clean package -DskipTests

# 2. Usamos una imagen ligera de Java para ejecutar el archivo (Etapa de ejecución)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copiamos el archivo .jar generado en la etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Exponemos el puerto de Spring Boot
EXPOSE 8080

# Este es el comando final que equivale a tu "run"
ENTRYPOINT ["java", "-jar", "app.jar"]