# -*- coding: utf-8 -*-
"""
Created on Sun Oct 25 16:36:45 2020

@author: Rohan
"""

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException as ElemNotFound

'''
################## How to Use ##############################

1. Modify the add_extension method, with filepath where the
   .crx file is present.
2. Run the code and once the browser opens, turn on the
   developer options to view the ID of the extension.
3. Rerun the code, by entering the extension_id field.
4. The code checks the popup.html page for any inconsistencies.

############################################################
''''

    
class AutomatedTesting():
    def __init__(self,test_buttons):
        self.test_buttons = test_buttons

        # Load the extension by packing the extension into a .crx file        
        options = webdriver.ChromeOptions()
        options.add_extension("C:\\Users\\Rohan\\Savitar\\savitar.crx")
        
        self.driver = webdriver.Chrome(options=options) 
    
    def test(self,extension_id):
        self.driver.get("chrome-extension://"+ extension_id + "/code/popup.html")
        for label in self.test_buttons:
           try:
              python_button = self.driver.find_element_by_id(label)
              python_button.click()
           except ElemNotFound:
              print("Missing " + label.capitalize() + " Button")
              self.driver.close()
              return False
        return True
        
    def close(self):
        print("All Tests Successful")
        self.driver.close()
        
        
        
if __name__ == "__main__":
    # Intialise Parameters
    test_buttons = ["experience","sponsorship","degree","remote"]
    # Open the extension in the webdriver with dev options to see the ID
    extension_id = "efeoodpocojdlnpohkhmjmhhddadmaoa"
    
    # Create a testing Instance
    test = AutomatedTesting(test_buttons)
    status = test.test(extension_id)
    if(status):
        test.close()

