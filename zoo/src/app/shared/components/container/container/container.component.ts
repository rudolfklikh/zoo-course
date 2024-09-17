import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { IZooSectionContentContainer } from "../../../interfaces";
import { ZooBaseContainerComponent } from "../base-container/base-conatiner.component";

@Component({
	selector: 'zoo-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule]
})
export class ZooContainerComponent extends ZooBaseContainerComponent<IZooSectionContentContainer> {
}
