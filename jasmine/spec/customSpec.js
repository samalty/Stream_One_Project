describe("Form validation", function(){
    
    describe("Empty name field test", function(){
        it("should remind the user to fill out the name field", function(){
            expect(validateForm("", "test@domain.com")).not.toBe(true);
            expect(validateForm("", "test@domain.com")).toBeFalsy();
        });
    });
    
    describe("Empty name field feedback test", function(){
        it("should return the correct alert", function(){
            spyOn(window, "alert");
            validateForm("", "test@domain.com");
            expect(window.alert).toHaveBeenCalledWith("Please ensure that you have entered your name.");
        });
    });
    
    describe("Empty email field test", function(){
        it("should remind the user to fill out the name field", function(){
            expect(validateForm("Test", "")).not.toBe(true);
            expect(validateForm("Test", "")).toBeFalsy();
        });
    });
    
    describe("Empty email field feedback test", function(){
        it("should return the correct alert", function(){
            spyOn(window, "alert");
            validateForm("Test", "");
            expect(window.alert).toHaveBeenCalledWith("Please ensure that you have entered your email address.");
        });
    });
    
    describe("Form with invalid email test", function(){
        it("should return true", function(){
            expect(validateForm("Test", "test.domain.com")).toBe(false);
            expect(validateForm("Test", "test.domain.com")).toBeFalsy();
        });
    });
    
    describe("Form with invalid email feedback test", function(){
        it("should return the correct alert", function(){
            spyOn(window, "alert");
            validateForm("Test", "test.domain.com");
            expect(window.alert).toHaveBeenCalledWith("Please enter a valid email address.");
        });
    });
    
    describe("Form with completed valid fields test", function(){
        it("should return true", function(){
            expect(validateForm("Test", "test@domain.com")).toBe(true);
            expect(validateForm("Test", "test@domain.com")).not.toBeFalsy();
        });
    });
    
    describe("Form with completed valid fields feedback test", function(){
        it("should return the correct alert", function(){
            spyOn(window, "alert");
            validateForm("Test", "test@domain.com");
            expect(window.alert).toHaveBeenCalledWith("Thanks. We'll be in touch with you soon.");
        });
    });

});

function validateForm(x, y) {

	//var x = document.forms["contactForm"]["name"].value;
	//var y = document.forms["contactForm"]["email"].value;
	
	if (x == "") {
    	alert("Please ensure that you have entered your name.");
    	return false;
	} else if (y == "") {
		alert("Please ensure that you have entered your email address.");
		return false;
	} else if (y.includes("@")) {
	    alert("Thanks. We'll be in touch with you soon.");
	    return true;
	} else {
	    alert("Please enter a valid email address.");
	    return false;
	}
}