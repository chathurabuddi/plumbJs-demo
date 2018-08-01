jsPlumb.ready(function() {
    jsPlumb.draggable("item_1", {
        containment:true
    });
    jsPlumb.draggable("item_2", {
        containment:true
    });
    jsPlumb.setContainer("wrapper");
    jsPlumb.connect({
        connector: ["Straight"],
        source:"item_1_1",
        target:"item_2_2",
        anchor: ["Left", "Right"],
        endpoint:"Dot"
    });
});