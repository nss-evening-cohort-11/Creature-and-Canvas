USE [master]
GO
/****** Object:  Database [Creature_and_Canvas]    Script Date: 11/3/2020 6:23:50 PM ******/
CREATE DATABASE [Creature_and_Canvas]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'creature_and_canvas', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\creature_and_canvas.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'creature_and_canvas_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\creature_and_canvas_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Creature_and_Canvas] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Creature_and_Canvas].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Creature_and_Canvas] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET ARITHABORT OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Creature_and_Canvas] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Creature_and_Canvas] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Creature_and_Canvas] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Creature_and_Canvas] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET RECOVERY FULL 
GO
ALTER DATABASE [Creature_and_Canvas] SET  MULTI_USER 
GO
ALTER DATABASE [Creature_and_Canvas] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Creature_and_Canvas] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Creature_and_Canvas] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Creature_and_Canvas] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Creature_and_Canvas] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Creature_and_Canvas', N'ON'
GO
ALTER DATABASE [Creature_and_Canvas] SET QUERY_STORE = OFF
GO
USE [Creature_and_Canvas]
GO
/****** Object:  Table [dbo].[Animals]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Animals](
	[AnimalID] [int] IDENTITY(1,1) NOT NULL,
	[AnimalName] [varchar](255) NOT NULL,
	[Bio] [varchar](2048) NOT NULL,
	[imageURL] [varchar](1024) NOT NULL,
 CONSTRAINT [PK_Animals] PRIMARY KEY CLUSTERED 
(
	[AnimalID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[EmailAddress] [varchar](255) NOT NULL,
	[MailingAddress] [varchar](255) NOT NULL,
	[AccountCreated] [date] NOT NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[OrderDate] [datetime] NOT NULL,
	[CustomerID] [int] NOT NULL,
	[PaymentID] [int] NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Paintings]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Paintings](
	[ItemID] [int] IDENTITY(1,1) NOT NULL,
	[Price] [int] NOT NULL,
	[CanvasSize] [varchar](255) NOT NULL,
	[AnimalID] [int] NOT NULL,
	[PaintingDescription] [varchar](2048) NOT NULL,
	[ProductTypeID] [int] NOT NULL,
	[ImageURL] [varchar](1024) NOT NULL,
	[Title] [varchar](255) NOT NULL,
 CONSTRAINT [PK_Paintings] PRIMARY KEY CLUSTERED 
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payments]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payments](
	[PaymentID] [int] IDENTITY(1,1) NOT NULL,
	[PaymentType] [varchar](255) NOT NULL,
	[AccountNumber] [int] NOT NULL,
	[CustomerID] [int] NOT NULL,
 CONSTRAINT [PK_Payments] PRIMARY KEY CLUSTERED 
(
	[PaymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductOrders]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductOrders](
	[ProductOrderID] [int] IDENTITY(1,1) NOT NULL,
	[Quantity] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[OrderID] [int] NOT NULL,
 CONSTRAINT [PK_ProductOrders] PRIMARY KEY CLUSTERED 
(
	[ProductOrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[ProductType] [int] NOT NULL,
	[ItemID] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tickets]    Script Date: 11/3/2020 6:23:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tickets](
	[TicketID] [int] IDENTITY(1,1) NOT NULL,
	[Price] [int] NOT NULL,
	[AnimalID] [int] NOT NULL,
	[TicketDate] [datetime] NOT NULL,
	[EventDescription] [varchar](2048) NOT NULL,
	[ProductTypeID] [int] NOT NULL,
	[QuantityAvailable] [int] NOT NULL,
 CONSTRAINT [PK_Tickets] PRIMARY KEY CLUSTERED 
(
	[TicketID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Paintings] ADD  DEFAULT ('A') FOR [Title]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [Orders_Customers] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [Orders_Customers]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [Orders_Payments] FOREIGN KEY([PaymentID])
REFERENCES [dbo].[Payments] ([PaymentID])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [Orders_Payments]
GO
ALTER TABLE [dbo].[Paintings]  WITH CHECK ADD  CONSTRAINT [Paintings_ProductType] FOREIGN KEY([ItemID])
REFERENCES [dbo].[Paintings] ([ItemID])
GO
ALTER TABLE [dbo].[Paintings] CHECK CONSTRAINT [Paintings_ProductType]
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD  CONSTRAINT [Payments_Customers] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
ALTER TABLE [dbo].[Payments] CHECK CONSTRAINT [Payments_Customers]
GO
ALTER TABLE [dbo].[ProductOrders]  WITH CHECK ADD  CONSTRAINT [ProductOrders_Orders] FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[ProductOrders] CHECK CONSTRAINT [ProductOrders_Orders]
GO
ALTER TABLE [dbo].[ProductOrders]  WITH CHECK ADD  CONSTRAINT [ProductOrders_Products] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
GO
ALTER TABLE [dbo].[ProductOrders] CHECK CONSTRAINT [ProductOrders_Products]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [Products_Paintings] FOREIGN KEY([ItemID])
REFERENCES [dbo].[Paintings] ([ItemID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [Products_Paintings]
GO
USE [master]
GO
ALTER DATABASE [Creature_and_Canvas] SET  READ_WRITE 
GO
