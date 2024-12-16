import mysql.connector as z

def create_database(unique):
    try:
        # Establish connection to the MySQL server
        mydb = z.connect(
            host="localhost",
            user="root",
            password="12345"
        )
        
        mycursor = mydb.cursor()

        # Use the IF NOT EXISTS clause to prevent error if the database already exists
        query = f"CREATE DATABASE IF NOT EXISTS `{unique}`"
        
        # Execute the query to create the database
        mycursor.execute(query)

        
    except z.Error as err:
        return  False
    finally:
        if mycursor:
            a=service(unique)
            mycursor.close()
        if mydb:
            mydb.close()

    if a==False:
        return False
    return True


def service(unique):
    try:
        # Establish connection
        m = z.connect(host="localhost", user="root", passwd="12345", database=unique)
        ex = m.cursor()

        # Create table query
        query = f'''
        CREATE TABLE IF NOT EXISTS Service (
            Name VARCHAR(100) PRIMARY KEY,
            SAC_Code VARCHAR(50),
            Price BIGINT,
            GST INT(3)
        );
        '''
        
        # Execute the query
        ex.execute(query)
        
        # Commit the changes
        m.commit()

    except z.Error as err:
        return False

    finally:
        # Close the cursor and connection
        if ex:
            ex.close()
        if m:
            m.close()

