var ctx = empty-scene(400, 200)
cloud-circle = circle(20, "solid", "light-gray")
var cloud = overlay-xy(cloud-circle,20,15, cloud-circle)
cloud := overlay-xy(cloud, -20, 15, cloud-circle)
cloud := overlay-xy(cloud, 20,35, rectangle(40, 20, "solid", "light-gray"))
cloud
blue-c = circle(10, "solid", "blue")
white-c = circle(10, "solid", "white")

dumb = overlay-xy(blue-c,5, 0, overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,overlay-xy(blue-c,5, 0,overlay-xy(white-c,5, 0,blue-c )))))))))))))))))

overlay-xy(rectangle(95, 10, "solid", "blue"), -5, -10,dumb)
