function skillsMember(){
    return {
        restrict: "E",
        templateUrl: "app/views/skills-member.html",
        scope: {
            skill: "="
        },
        link: function(scope, element, attrs){
            scope.showSkill = function(){
                alert(scope.skill.name);            
            }
        }
    }
}
