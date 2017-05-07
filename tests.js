QUnit.config.autostart = false;

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("test empty username field", function(assert) {
    var result = gitHubSearch();
    assert.ok(result == false, "Passed!" );
});

QUnit.test("test searched username exist #1", function(assert) {
    document.getElementById("username").value = "octocat";
    var result = gitHubSearch();
    assert.ok( result == true, "Passed!" );
});

QUnit.test("test searched username exist #2", function(assert) {
    document.getElementById("username").value = "nnacin";
    var result = gitHubSearch();
    assert.ok( result == true, "Passed!" );
});

QUnit.test("test searched username does not exist", function(assert) {
    document.getElementById("username").value = "nnacinoo";
    var result = gitHubSearch();
    assert.ok( result == null, "Passed!" );
});

QUnit.test("test searched username exist #3", function(assert) {
    document.getElementById("username").value = "octodog";
    var result = gitHubSearch();
    assert.ok( result == true, "Passed!" );
});