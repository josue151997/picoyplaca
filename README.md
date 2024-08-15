script sql
USE [picoyplacadb]
GO
/****** Object:  Schema [picoyplacadb]    Script Date: 15/8/2024 5:16:31 ******/
CREATE SCHEMA [picoyplacadb]
GO
/****** Object:  Table [picoyplacadb].[consultas]    Script Date: 15/8/2024 5:16:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [picoyplacadb].[consultas](
	[Id_consulta] [int] IDENTITY(29,1) NOT NULL,
	[fecha_registro] [date] NOT NULL,
	[hora_registro] [nvarchar](20) NOT NULL,
	[puede_circular] [smallint] NOT NULL,
	[placa] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_consultas_Id_consulta] PRIMARY KEY CLUSTERED 
(
	[Id_consulta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [picoyplacadb].[consultas] ON 
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (1, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC123')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (2, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC123')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (3, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC125')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (4, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC120')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (5, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC125')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (6, CAST(N'2024-08-14' AS Date), N'09:00', 1, N'ABC126')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (7, CAST(N'2024-08-14' AS Date), N'8:00', 0, N'ABC126')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (8, CAST(N'2024-08-14' AS Date), N'8:00', 0, N'ABC126')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (9, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC125')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (10, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC125')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (11, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC122')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (12, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC122')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (13, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC121')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (14, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC129')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (15, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC12')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (16, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC1213')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (17, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1212')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (18, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1211')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (19, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC1213')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (20, CAST(N'2024-08-14' AS Date), N'12:00', 0, N'ABC1214')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (21, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1215')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (22, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1216')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (23, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1217')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (24, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1218')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (25, CAST(N'2024-08-14' AS Date), N'12:00', 1, N'ABC1219')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (26, CAST(N'2024-08-14' AS Date), N'8:00', 0, N'ABC1215')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (27, CAST(N'2024-08-14' AS Date), N'8:00', 0, N'ABC1215')
GO
INSERT [picoyplacadb].[consultas] ([Id_consulta], [fecha_registro], [hora_registro], [puede_circular], [placa]) VALUES (28, CAST(N'2024-08-14' AS Date), N'8:00', 0, N'ABC1215')
GO
SET IDENTITY_INSERT [picoyplacadb].[consultas] OFF
GO
EXEC sys.sp_addextendedproperty @name=N'MS_SSMA_SOURCE', @value=N'picoyplacadb.consultas' , @level0type=N'SCHEMA',@level0name=N'picoyplacadb', @level1type=N'TABLE',@level1name=N'consultas'
GO

![image](https://github.com/user-attachments/assets/849f92ab-4f84-492c-965e-778a5c31a7ea)
![image](https://github.com/user-attachments/assets/1c5f9fc9-5a57-4c83-9b8e-8da17f0c0cce)
