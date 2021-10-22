<!-- Including header and main navigation panel partials -->
<%- include('../partials/header.ejs') %> <%- include('../partials/main_nav.ejs')%>

<!-- Content for the Add Page -->
<div class="container">
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <h1><%= title %> </h1>
            <form class="form" method="POST">
                <div class="form-group">
                    <lable for="nameTextField">Contact Name</lable>
                    <input type="text" class="form-control" 
                    id="nameTextField" 
                    placeholder="Enter the Contact name" 
                    name="name" required>
                </div>
                <div class="form-group">
                    <lable for="phoneTextField">Contact Phone</lable>
                    <input type="text" class="form-control" 
                    id="phoneTextField" 
                    placeholder="Enter the Contact phone" 
                    name="phone" required>
                </div>
                <div class="form-group">
                    <lable for="emailTextField">Contact Email</lable>
                    <input type="text" class="form-control" 
                    id="emailTextField" 
                    placeholder="Enter the Contact email address" 
                    name="email" required>
                </div>
                <div class="form-group">
                    <lable for="addressTextField">Contact Address</lable>
                    <input type="text" class="form-control" 
                    id="addressTextField" 
                    placeholder="Enter the Contact address" 
                    name="address">
                </div>

                <button class="btn btn-primary" type="submit">
                    <i class="fas fa-edit"></i> Submit</button>
                    <a href="/contact-list" class="btn btn-warning"><i class="fa fa-undo"></i> Cancel</a>
            </form>
        </div>
    </div>
</div>

<!-- Including footer and bottom panel partials -->
<%- include('../partials/bottom_nav.ejs')%> <%- include('../partials/footer.ejs') %>